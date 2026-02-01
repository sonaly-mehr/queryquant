import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  const { email, consent } = await request.json();
  
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        CONSENT: consent ? "Yes" : "No"
      }
    });
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Mailchimp error:', error.response?.body || error);
    return Response.json(
      { error: error.response?.body?.title || 'Subscription failed' },
      { status: 500 }
    );
  }
}