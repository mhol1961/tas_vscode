@echo off
echo ============================================
echo Syncing fixed files to GitHub for deployment
echo ============================================

echo 1. Adding all changed files to Git...
git add .

echo 2. Committing changes...
git commit -m "Fix HTML entities causing build failures"

echo 3. Switching to master branch...
git checkout master

echo 4. Merging changes from dev branch...
git merge dev

echo 5. Pushing both branches to GitHub...
git push origin dev
git push origin master

echo ============================================
echo Done! Your changes should now be deployed by Vercel.
echo ============================================
