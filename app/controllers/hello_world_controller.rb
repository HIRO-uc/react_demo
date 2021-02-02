# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
  end

  # 多分こっちでpropsに本の名前とかいちいち代入して渡せばわんちゃん
end

