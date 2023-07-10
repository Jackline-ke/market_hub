class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string     :content
      t.references :product ,foreign_key: true
      t.references :buyer, foreign_key: true 
      t.timestamps
    end
  end
end
