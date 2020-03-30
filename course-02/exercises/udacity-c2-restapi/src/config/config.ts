export const config = {
	dev: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: "postgres",
		aws_region: "us-east-1",
		aws_profile: "default",
		aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
		jwt_secret: process.env.JWT_SECRET
	},
	prod: {
		username: "",
		password: "",
		database: "udagram_prod",
		host: "",
		dialect: "postgres"
	}
};
