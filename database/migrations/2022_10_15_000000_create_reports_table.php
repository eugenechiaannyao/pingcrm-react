<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsTable extends Migration
{
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('account_id')->index();
            $table->string('title', 100);
            $table->string('description', 100)->nullable();
            $table->string('date', 50)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
