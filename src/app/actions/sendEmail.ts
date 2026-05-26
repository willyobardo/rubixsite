'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const nome = formData.get('nome') as string
  const empresa = formData.get('empresa') as string
  const cargo = formData.get('cargo') as string
  const email = formData.get('email') as string
  const telefone = formData.get('telefone') as string
  const objetivos = formData.get('objetivos') as string
  const mensagem = formData.get('mensagem') as string
  const recaptchaToken = formData.get('g-recaptcha-response') as string

  if (!nome || !empresa || !cargo || !email || !telefone) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'E-mail inválido.' }
  }

  const phoneDigits = telefone.replace(/\D/g, '')
  if (phoneDigits.length < 10) {
    return { status: 'error', message: 'Telefone inválido.' }
  }

  if (!recaptchaToken) {
    return { status: 'error', message: 'Por favor, confirme que você não é um robô.' }
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY ?? '',
      response: recaptchaToken,
    }),
  })
  const { success: captchaOk } = (await verifyRes.json()) as { success: boolean }
  if (!captchaOk) {
    return { status: 'error', message: 'Falha na verificação de segurança. Tente novamente.' }
  }

  const { error } = await resend.emails.send({
    from: 'Formulário Rubix <contato@zh3.com.br>',
    to: 'contato@zh3.com.br',
    replyTo: email,
    subject: `Novo contato: ${nome} — ${empresa}`,
    html: `
      <h2 style="color:#002f43;font-family:sans-serif;">Novo contato via site Rubix</h2>
      <table style="font-family:sans-serif;font-size:15px;line-height:1.7;border-collapse:collapse;" cellpadding="8">
        <tr><td style="color:#67768e;width:160px;"><strong>Nome</strong></td><td>${nome}</td></tr>
        <tr><td style="color:#67768e;"><strong>Empresa</strong></td><td>${empresa}</td></tr>
        <tr><td style="color:#67768e;"><strong>Cargo</strong></td><td>${cargo}</td></tr>
        <tr><td style="color:#67768e;"><strong>E-mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="color:#67768e;"><strong>Telefone</strong></td><td>${telefone}</td></tr>
        ${objetivos ? `<tr><td style="color:#67768e;vertical-align:top;"><strong>Objetivos</strong></td><td>${objetivos.replace(/\n/g, '<br>')}</td></tr>` : ''}
        ${mensagem ? `<tr><td style="color:#67768e;vertical-align:top;"><strong>Mensagem</strong></td><td>${mensagem.replace(/\n/g, '<br>')}</td></tr>` : ''}
      </table>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return { status: 'error', message: 'Erro ao enviar mensagem. Tente novamente.' }
  }

  return { status: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' }
}
