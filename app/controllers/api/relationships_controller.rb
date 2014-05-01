class Api::RelationshipsController < ApplicationController

  def create
    @relationship = Relationship.new(relationship_params)

    if @relationship.save
      render json: @relationship
    else
      render json: @relationship.errors.full_messages, status: 402
    end 
  end

  def destroy
    @relationship = Relationship.find(params[:id])
    @relationship.destroy
    render "relationships/destroy"
  end

  def index
    @relationships = Relationship.all
    render "relationships/index"
  end

  def update
    @relationship = Relationship.find(params[:id])
    @relationship.update_attributes(relationship_params)
    render "relationships/show"
  end

  private
  def relationship_params
    params.require(:relationship).permit(:liker_id, :liked_user_id, :like, :emailed)
  end

end
