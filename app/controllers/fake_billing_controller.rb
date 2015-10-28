class FakeBillingController < ApplicationController

  def show

    if params[:customerID].present?
      sleep 2
      render json: {
               lastFour: Faker::Business.credit_card_number[-4..-1],
               cardType: Faker::Business.credit_card_type,
        expirationMonth: Faker::Business.credit_card_expiry_date.month,
         expirationYear: Faker::Business.credit_card_expiry_date.year,
            detailsLink: Faker::Internet.url,
      }
    else
      head :not_found
    end
  end


end