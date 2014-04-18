class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.references :liker, index: true
      t.references :liked_user, index: true
      t.boolean :like

      t.timestamps
    end
  end
end
