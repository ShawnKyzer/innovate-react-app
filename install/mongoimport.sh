sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org=3.0.6 mongodb-org-server=3.0.6 mongodb-org-shell=3.0.6 mongodb-org-mongos=3.0.6 mongodb-org-tools=3.0.6

wget http://beta.json-generator.com/api/json/get/V18fS3jJx -O employees_females.json
wget http://beta.json-generator.com/api/json/get/VkmckE9Jx -O employees_males.json

mongoimport -h localhost:3000 --db meteor --collection employees --type json --file employee_males.json —jsonArray
mongoimport -h localhost:3000 --db meteor --collection employees --type json --file employee_females.json -jsonArray	