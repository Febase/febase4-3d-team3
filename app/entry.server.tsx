import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';

import type { HandleDocumentRequestFunction } from '@remix-run/cloudflare';

const handleRequest: HandleDocumentRequestFunction = (
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) => {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
