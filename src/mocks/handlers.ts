// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/access', () => {
    return HttpResponse.json({
      access: {
        'app/example/bill/view': false,
        'app/example/form/update': true,
      },
    })
  }),
]
