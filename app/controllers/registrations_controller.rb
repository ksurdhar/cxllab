class RegistrationsController < Devise::RegistrationsController
  def new
    client = Soundcloud.new(:client_id => '5a1ab580242d18027f496e01bfc31064',
                        :client_secret => '62ab42202db997a3855d6e7d8d5c67db',
                        :redirect_uri => new_user_registration_url, :scope => "non-expiring")

    code = params[:code]
    access_token = client.exchange_token(:code => code)
    @new_sc_token = access_token.access_token


    new_client = Soundcloud.new(:access_token => @new_sc_token)

    current_user = new_client.get('/me')
    @new_sc_id = current_user.id

    super
  end

  def create
    build_resource(sign_up_params.merge!(user_params))

    resource_saved = resource.save
    yield resource if block_given?
    if resource_saved
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_flashing_format?
        sign_up(resource_name, resource)
        respond_with resource, location: after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
        expire_data_after_sign_in!
        respond_with resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      respond_with resource
    end
  end

  def update
    super
  end

  private
  def user_params
    params.require(:user).permit(:email, :about, :genre, :producer, :sc_access_token, :sc_id, :encrypted_password)
  end
end