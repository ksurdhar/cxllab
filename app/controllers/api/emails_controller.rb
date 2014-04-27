class Api::EmailsController < ApplicationController

  def create
    @email = Email.new(email_params)
    if @email.save
      render json: @email
    else
      render json: @email.errors.full_messages, status: 402
    end 
  end

  def index
    @emails = Email.all
    render "emails/index"
  end

  def show
  end

  private
  def email_params
    params.require(:email).permit(:body, :sender_id, :reciever_id)
  end
end
