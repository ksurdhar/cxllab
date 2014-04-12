class UsersController < ApplicationController

  def sc_connect
    client = Soundcloud.new(:client_id => '5a1ab580242d18027f496e01bfc31064',
                        :client_secret => '62ab42202db997a3855d6e7d8d5c67db',
                        :redirect_uri => new_user_registration_url)
    redirect_to client.authorize_url()
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :about, :genre, :producer, :sc_access_token, :sc_id)
  end
end
