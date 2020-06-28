cd ../client

npm run build
mkdir ../server/dist/
cp -r ./dist/* ../server/dist/

cd ../server
gcloud app deploy ./app.yaml