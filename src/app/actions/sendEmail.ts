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

  if (!nome || !empresa || !cargo || !email || !telefone) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  try {
    await resend.emails.send({
      from: 'Formulário Rubix <onboarding@resend.dev>',
      to: 'willy.trancoso@zh3.com.br',
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

    return { status: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' }
  } catch (err) {
    console.error('Resend error:', err)
    return { status: 'error', message: 'Erro ao enviar mensagem. Tente novamente.' }
  }
}
