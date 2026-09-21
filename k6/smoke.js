import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  const base = __ENV.BASE_URL || 'https://scoobiii.github.io/caminho-da-fe-360/';
  const res = http.get(base);
  check(res, {
    'portal responde 200': (r) => r.status === 200,
    'portal contém Caminho da Fé': (r) => r.body.includes('Caminho da Fé'),
  });
  sleep(1);
}
