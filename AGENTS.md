# Commit Guidelines

Generate Git commit messages following the Conventional Commits format.

## Commit Message Format

Each commit message should follow this structure:
```
<type>(<scope>): <description>

<body>
```

## Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build, dependencies, or tooling changes

## Rules
1. Use the imperative mood ("add" not "added")
2. Don't capitalize the first letter
3. No period at the end of the description
4. Keep the description under 50 characters
5. Use lowercase for scope
6. Example: "feat(auth): add jwt token support"
