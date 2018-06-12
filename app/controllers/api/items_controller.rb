class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render_errors(item)
  end

  def update
    @item.update(bought: !@item.bought)
    render json: @item
  end

  def destroy
    @item.destroy
  end

  private

    def item_params
      params.require(:item).permit(:name, :price)
    end

    def set_item
      @item = Item.find(params[:id])
    end

end