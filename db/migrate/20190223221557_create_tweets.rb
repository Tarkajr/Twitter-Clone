class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :content, :username, :handle, :avatar_url
      t.timestamps
    end
  end
end
