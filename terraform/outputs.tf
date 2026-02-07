output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.website.id
}

output "nameservers" {
  value = aws_route53_zone.main.name_servers
  description = "Configura estos NS en tu registrador de dominio (Godaddy, Namecheap, etc)"
}