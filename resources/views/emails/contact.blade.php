<b>Name:</b> {{ $data['name'] }}<br />
<b>Email:</b> {{ $data['email'] }}<br />
<b>Company:</b> {{ $data['company'] or 'Unspecified' }}<br />
<b>Project type:</b><br />
<ul>
@foreach($data['project'] as $key => $value)
    <li>{{ ucfirst($key) }}</li>
@endforeach
</ul>
<b>Budget:</b> {{ $data['budget'] or 'Unspecified' }} €<br />
<b>Message:</b><br />
{{ $data['message'] }}
