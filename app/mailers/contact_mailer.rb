class ContactMailer < ApplicationMailer
  default from: 'anais.bremand@quartz-agency.fr'

  def send_contact_form(contact_form)
    @contact_form = contact_form
    mail(to: 'anais.bremand@quartz-agency.fr',
    subject: 'Nouveau contact depuis quartz-agency.fr',
       )
  end
end
