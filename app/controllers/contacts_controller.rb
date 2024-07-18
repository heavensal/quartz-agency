class ContactsController < ApplicationController

  def create
    # Ici, nous capturons les données du formulaire et les passons au mailer
    ContactMailer.send_contact_form(contact_params).deliver_now!
    flash[:success] = "Votre demande de contact a bien été prise en compte. Nous reviendrons vers vous dans les plus brefs délais."
    redirect_to root_path # Ou une autre route de ton choix
  end

  private

  def contact_params
    params.require(:contact_form).permit(:first_name, :last_name, :company, :email, :phone, :message)
  end
end
