rm -rf ./docs
ng build --base-href=./
mv ./dist/todolist ./docs  
rm -rf ./dist
echo "after build is completed."