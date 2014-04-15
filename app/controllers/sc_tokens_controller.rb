class ScTokensController < ApplicationController

  def create
    @sc_token = Sc_token.new(sc_token_params)
    @sc_token.save
  end

  private
  def sc_token_params
    params.require(:sc_token).permit(:body, :user_id)
  end

end
