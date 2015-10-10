<?php namespace App\Http\Responses;

use League\Fractal\Manager as Fractal;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;

class Output {
    /**
     * Fractal library used for data presentation and transformation.
     *
     * @var \League\Fractal\Manager
     */
    private $fractal;

    /**
     * Construct a new output manager with a fractal manager.
     *
     * @param \League\Fractal\Manager $fractal
     */
    public function __construct(Fractal $fractal)
    {
        $this->fractal = $fractal;
    }

    public function asError($message, $statusCode, $errorCode)
    {
        return [
            'error' => [
                'code'      => $errorCode,
                'http_code' => (int) $statusCode,
                'message'   => $message,
            ]
        ];
    }

    public function asSuccess($message, $statusCode, $additionalData)
    {
        if ($additionalData) {
            return [
                'success' => [
                    'http_code' => (int) $statusCode,
                    'message'   => $message,
                    $additionalData
                ]
            ];
        } else {
            return [
                'success' => [
                    'http_code' => (int) $statusCode,
                    'message'   => $message
                ]
            ];
        }
    }

    /**
     * Output a single item.
     *
     * @param  mixed $item
     * @param  mixed $callback
     * @return array
     */
    public function asItemArray($item, $callback)
    {
        $resource = new Item($item, $callback);
        $root = $this->fractal->createData($resource);
        return $root->toArray();
    }

    /**
     * Output as a collection of items.
     *
     * @param  mixed $collection
     * @param  mixed $callback
     * @return array
     */
    public function asCollectionArray($collection, $callback)
    {
        $resource = new Collection($collection, $callback);
        $root = $this->fractal->createData($resource);
        return $root->toArray();
    }
}
