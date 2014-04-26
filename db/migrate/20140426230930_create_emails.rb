class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :body
      t.references :sender, index: true
      t.references :reciever, index: true

      t.timestamps
    end
  end
end
