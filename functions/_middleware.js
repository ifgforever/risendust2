export async function onRequest(context) {
  // If this middleware runs at all, Functions are being deployed.
  return context.next();
}
