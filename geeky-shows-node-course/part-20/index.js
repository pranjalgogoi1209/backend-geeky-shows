import dns from "dns";

dns.lookup("geekyshows.com", (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

// MX for main exchange
// NS for name server
dns.resolve("geekyshows.com", "NS", (error, records) => {
  if (error) throw error;
  console.log(records);
});
