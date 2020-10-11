# Add these files to S3 for static JSON server

1. save valid JSON as endpoint name, with no file extension
2. upload to the root folder on S3
3. you'll need to change each files properties -> metadata -> Content type = applicaton/json
4. you'll also likely need to make the files public aghain (though we should chnage the bucket policy once live so that only the website is able to make requests)
