# GitHub Setup and Usage Guide

## Table of Contents
1. [Installing Git](#1-installing-git)
2. [Configuring Git](#2-configuring-git)
3. [SSH Setup](#3-ssh-setup)
4. [Cloning Repositories](#4-cloning-repositories)
5. [Basic Git Operations](#5-basic-git-operations)
6. [GitHub CLI](#6-github-cli)
7. [Personal Access Tokens](#7-personal-access-tokens)
8. [Troubleshooting](#8-troubleshooting)

## 1. Installing Git

### Windows
1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer and follow the prompts

### Linux
For Ubuntu or Debian-based systems:
```bash
sudo apt-get update
sudo apt-get install git
```

For Fedora:
```bash
sudo dnf install git
```

## 2. Configuring Git

Set up your Git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

Verify your configuration:
```bash
git config --list
```

## 3. SSH Setup

### Generating SSH Key
1. Open Terminal (Linux) or Git Bash (Windows)
2. Generate a new SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
3. Press Enter to accept the default file location
4. Enter a secure passphrase (optional but recommended)

### Adding SSH Key to GitHub
1. Copy the SSH key to your clipboard:
   - Linux: `cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard`
   - Windows: `cat ~/.ssh/id_ed25519.pub | clip`
2. Go to GitHub Settings > SSH and GPG keys > New SSH key
3. Paste your key and give it a descriptive title

### Testing SSH Connection
1. Test your SSH connection to GitHub:
   ```bash
   ssh -T git@github.com
   ```
2. You may see a warning about authenticity. Type 'yes' to continue.
3. If successful, you'll see a message like:
   "Hi username! You've successfully authenticated, but GitHub does not provide shell access."

## 4. Cloning Repositories

### Using HTTPS
```bash
git clone https://github.com/username/repository.git
```

### Using SSH
```bash
git clone git@github.com:username/repository.git
```

## 5. Basic Git Operations

### Checking Status
```bash
git status
```

### Adding Changes
Add specific file:
```bash
git add filename
```

Add all changes:
```bash
git add .
```

### Committing Changes
```bash
git commit -m "Your commit message"
```

### Pushing Changes
```bash
git push origin main
```

### Pulling Changes
```bash
git pull origin main
```

### Creating a New Branch
```bash
git checkout -b new-branch-name
```

### Switching Branches
```bash
git checkout branch-name
```

## 6. GitHub CLI

### Installing GitHub CLI

#### Windows
1. Download the installer from [cli.github.com](https://cli.github.com/)
2. Run the installer

#### Linux
```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh
```

### Authenticating with GitHub CLI
```bash
gh auth login
```
Follow the prompts to complete the authentication process.

### Common GitHub CLI Commands
- Create a repository: `gh repo create`
- Create a pull request: `gh pr create`
- List pull requests: `gh pr list`
- Check out a pull request: `gh pr checkout [PR-NUMBER]`

## 7. Personal Access Tokens

### Generating a Token
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Click "Generate new token"
3. Give your token a descriptive name
4. Select the required scopes (permissions)
5. Click "Generate token"
6. Copy the token immediately (you won't be able to see it again)

### Using Personal Access Token
When pushing to a repository for the first time, use your GitHub username and the PAT as the password.

## 8. Troubleshooting

### SSH Issues
- Ensure your SSH key is added to the ssh-agent:
  ```bash
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
  ```
- Verify your SSH key is correctly added to GitHub in your account settings

### Git Push Errors
- If you get a "Permission denied" error, check your repository permissions on GitHub
- For "Updates were rejected" errors, try pulling the latest changes before pushing:
  ```bash
  git pull --rebase origin main
  git push origin main
  ```

### GitHub CLI Authentication Issues
- Run `gh auth status` to check your authentication status
- If issues persist, try `gh auth logout` and then `gh auth login` again

Remember to replace 'username', 'repository', and 'branch-name' with your actual GitHub username, repository name, and branch name where applicable.

For more detailed information and advanced usage, refer to the [official GitHub documentation](https://docs.github.com/).