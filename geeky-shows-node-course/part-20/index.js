import dns from "dns";

const HOST_NAME = "geekyshows.com";

dns.lookup(HOST_NAME, (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

// RRTYPE => MX for main exchange, NS for name server
dns.resolve(HOST_NAME, "MX", (error, records) => {
  if (error) throw error;
  console.log(records);
});
