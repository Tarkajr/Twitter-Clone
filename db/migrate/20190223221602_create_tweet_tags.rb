class CreateTweetTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tweet_tags do |t|
      t.belongs_to :tweet
      t.belongs_to :hashtag
      t.timestamps
    end
  end
end
