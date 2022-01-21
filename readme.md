## Node Webhooks Testing for Developer Support Engineers

This is a simple express app that allows DSEs to test webhook responses from the Nylas API. [Docs](https://developer.nylas.com/docs/developer-tools/webhooks/)

This app requires ngrok in order to work. Additional details on how to set up ngrok can be found [here](https://ngrok.com/docs)

Setup:
1. `git clone` this repo.
2. In a separate terminal instance, launch the ngrok service at port 3000: `./ngrok http 3000`
3. In the directory for this app run `npm start`
4. As you trigger events you should see the their deltas populate in the terminal:
```
🚀 Server running on port 3000
Received challenge code! - gvvpd57bv7gsykbl
Responding with challenge code! - gvvpd57bv7gsykbl
==========BODY DELTAS START==========
[
  {
    date: 1642799133,
    object: 'message',
    type: 'message.updated',
    object_data: {
      namespace_id: '1kalvs17axgufygf8dr7aey4y',
      account_id: '1kalvs17axgufygf8dr7aey4y',
      object: 'message',
      attributes: [Object],
      id: '4poto8qzt9a5fiyke4jnx0uci',
      metadata: null
    }
  }
]
==========BODY DELTAS START==========

==========BODY DELTAS START==========
[
  {
    date: 1642799193,
    object: 'message',
    type: 'message.updated',
    object_data: {
      namespace_id: '1kalvs17axgufygf8dr7aey4y',
      account_id: '1kalvs17axgufygf8dr7aey4y',
      object: 'message',
      attributes: [Object],
      id: '4poto8qzt9a5fiyke4jnx0uci',
      metadata: null
    }
  }
]
==========BODY DELTAS START==========
```