class CreateScTokens < ActiveRecord::Migration
  def change
    create_table :sc_tokens do |t|
      t.string :body
      t.references :user, index: true

      t.timestamps
    end
  end
end
