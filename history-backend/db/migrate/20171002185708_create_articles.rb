class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :url
      t.string :headline
      t.integer :user_id
      t.string :date_created
    end
  end
end
