export async function onRequest(context) {
  return new Response(
    `✅ Stripe secret works! Key starts with: ${context.env.STRIPE_SECRET_KEY?.slice(0, 10)}...`,
    { headers: { 'Content-Type': 'text/plain' } }
  ) 
}
