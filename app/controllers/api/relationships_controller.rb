class Api::RelationshipsController < ApplicationController

  def create
    @relationship = Relationship.new(relationship_params)

    if @relationship.save
      render json: @relationship
    else
      render json: @relationship.errors.full_messages, status: 402
    end 
  end

  def index
    @relationships = Relationship.all
    render "relationships/index"
  end

  private
  def relationship_params
    params.require(:relationship).permit(:liker_id, :liked_user_id)
  end

end
