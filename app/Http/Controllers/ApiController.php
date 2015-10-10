<?php namespace App\Http\Controllers;

use App\Http\Responses\Output;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;

use UnexpectedValueException;


class ApiController extends \App\Http\Controllers\Controller {

    /**
     * An output class for sending expected outputs.
     *
     * @var \App\Http\Responses\Output
     */
    private $output;

    /**
     * Current status code of the given request.
     *
     * @var integer
     */
    protected $statusCode = Response::HTTP_OK;

    const BASE_ERROR_CODE = 'com.rankednotes.error';
    const VALIDATION_FAILED_CODE = "com.rankednotes.error.validation_failed";

    /**
     * Make a new api controller with an output class.
     *
     * @param \App\Http\Responses\Output $output
     */
    public function __construct(Output $output)
    {
        $this->output = $output;
    }

    /**
     * Get the current status code.
     *
     * @return integer
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Respond with a json array.
     *
     * @param  array  $array
     * @param  array  $headers
     * @return \Illuminate\Http\Response
     */
    protected function respondWithArray(array $array, array $headers = array())
    {
        return response()->json($array, $this->statusCode, $headers);
    }

    /**
     * Respond with an error.
     *
     * @param  string $message
     * @param  string $errorCode
     * @return \Illuminate\Http\Response
     */
    protected function respondWithError($message, $errorCode)
    {
        if ($this->statusCode == Response::HTTP_OK) {
            throw new UnexpectedValueException('Error response requested with 200 status code; user error.');
        }

        $out = $this->output->asError($message, $this->statusCode, $errorCode);

        return $this->respondWithArray($out);
    }

    protected function respondWithSuccess($message, $additionalData = [])
    {
        $this->statusCode = Response::HTTP_OK;

        $out = $this->output->asSuccess($message, $this->statusCode, $additionalData);

        return $this->respondWithArray($out);
    }

    protected function respondWithCreated($message = "Successfully created!", $additionalData = [])
    {
        $this->statusCode = Response::HTTP_CREATED;

        $out = $this->output->asSuccess($message, $this->statusCode, $additionalData);

        return $this->respondWithArray($out);
    }

    /**
     * Respond with a single item.
     *
     * @param  mixed $item
     * @param  mixed $callback
     * @return \Illuminate\Http\Response
     */
    protected function respondWithItem($item, $callback)
    {
        $out = $this->output->asItemArray($item, $callback);

        return $this->respondWithArray($out);
    }

    /**
     * Respond with a collection of items.
     *
     * @param  array $collection
     * @param  mixed $callback
     * @return \Illuminate\Http\Response
     */
    protected function respondWithCollection($collection, $callback)
    {
        $out = $this->output->asCollectionArray($collection, $callback);

        return $this->respondWithArray($out);
    }

    /**
     * Custom response for invalid arguments
     *
     * @param string $errorMessage
     * @param string $errorCode
     * @return Response
     */
    protected function respondWithInvalidArgumentsError($errorMessage = "Invalid arguments.", $errorCode = "com.rankednotes.error.invalid_argument")
    {
        $this->statusCode = Response::HTTP_BAD_REQUEST;

        return $this->respondWithError($errorMessage, $errorCode);
    }

    /**
     * Respond with 403 for business logic errors
     *
     * @param string $errorMessage
     * @param string $errorCode
     * @return Response
     */
    protected function respondWithForbidden($errorMessage = "Forbidden.", $errorCode = "com.rankednotes.error.forbidden")
    {
        $this->statusCode = Response::HTTP_FORBIDDEN;

        return $this->respondWithError($errorMessage, $errorCode);
    }

    /**
     * Respond with 403 for business logic errors
     *
     * @param string $errorMessage
     * @param string $errorCode
     * @return Response
     */
    protected function respondWithNotFound($errorMessage = "Not found.", $errorCode = "com.rankednotes.error.not_found")
    {
        $this->statusCode = Response::HTTP_NOT_FOUND;

        return $this->respondWithError($errorMessage, $errorCode);
    }
}
