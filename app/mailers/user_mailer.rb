class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def cxllab_email(email)
    @user = email.sender
    @content = email.body
    mail(to: email.reciever.email, subject: 'We should jam!')
  end

end
