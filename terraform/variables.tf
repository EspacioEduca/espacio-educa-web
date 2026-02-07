variable "aws_region" {
  description = "Región principal de AWS"
  default     = "us-east-1" # CloudFront requiere certificados aquí
}

variable "domain_name" {
  description = "Dominio principal"
  default     = "espacioeduca.org"
}

variable "bucket_name" {
  description = "Nombre del bucket para el sitio web"
  default     = "espacio-educa-web-prod"
}

variable "environment" {
  default = "production"
}