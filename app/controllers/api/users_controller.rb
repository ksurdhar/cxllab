class Api::UsersController < ApplicationController

  def sc_connect
    client = Soundcloud.new(:client_id => '5a1ab580242d18027f496e01bfc31064',
                        :client_secret => '62ab42202db997a3855d6e7d8d5c67db',
                        :redirect_uri => 'https://cxllab.herokuapp.com/users/sign_up', :scope => "non-expiring")
    redirect_to client.authorize_url()
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.json { render json: @user }
    end
  end

  def index
    @users = User.all
    render "users/index"
  end

  def potentials
    @users = User.all - current_user.liked_users - [current_user]
    render "users/index"
  end

  def currentuser
    @users = [current_user]
    render "users/index"
  end

  private
  def user_params
    params.require(:user).permit(:email, :about, :genre, :producer, :sc_access_token, 
                                 :sc_id, :sc_username, :sc_permalink, :sc_permalink_url, :sc_uri)
  end
end
