<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'api'], function () {
    Route::group(['middleware' => 'jwt.auth'], function() {
        Route::get('ping', function() {
            return 'authenticated';
        });
    });

    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::post('signup', 'AuthenticateController@signup');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});
