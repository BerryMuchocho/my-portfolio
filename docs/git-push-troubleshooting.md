# Git Push Troubleshooting

## Error 1

```powershell
git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'origin'
```

### What it means

Git could not find a local branch named `main` to push.

### Why it happened here

This repository currently uses the local branch `master`.

Check with:

```powershell
git branch --all --verbose
```

Expected result in this repo:

```powershell
* master d4cc72b Initial commit for my capstone project: Portfolio website
```

### Fix

Push the branch that actually exists:

```powershell
git push -u origin master
```

If you want the branch to be called `main` instead, rename it first:

```powershell
git branch -M main
git push -u origin main
```

## Error 2

```powershell
git push origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.
```

### What it means

Git does not know any remote named `origin`.

### Why it happened here

This repository currently has no remotes configured.

Check with:

```powershell
git remote -v
```

If nothing is printed, no remote has been added yet.

### Fix

Add the GitHub repository as `origin`, then push:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin master
```

If your branch is `main`, use:

```powershell
git push -u origin main
```

## Recommended order to fix both problems

```powershell
git branch --all --verbose
git remote -v
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin master
```

## Quick summary

- `src refspec main does not match any` = the branch name you tried to push does not exist locally.
- `'origin' does not appear to be a git repository` = no `origin` remote is configured, or it is wrong.

## Notes for this repo

- Git root: `C:/Users/USER/alx-fe/my-portfolio`
- Current local branch at the time of writing: `master`
- Configured remotes at the time of writing: none
