# Your first PR

## Prerequisites

Before you start working on _Digitize Text_, make sure you had a look at [CONTRIBUTING.md](CONTRIBUTING.md).

## Finding things to work on

The core team usually tags issues that are ready to be worked on and easily accessible for new contributors with the [“you can do this” label][you can do this]. If you’ve never contributed to _Digitize Text_ before, these are a great place to start!

If you want to work on something else, e.g. new functionality or fixing a bug, it would be helpful if you submit a new issue, so that we can have a chance to discuss it first. We might have some pointers for you on how to get started, or how to best integrate it with existing solutions.

## Checking out the _Digitize Text_ repo

- Click the “Fork” button in the upper right corner of the repo
- Clone your fork:
  - `git clone git@github.com:<YOUR_GITHUB_USER>/digitize-text.git`
  - Learn more about how to manage your fork: https://help.github.com/articles/working-with-forks/
- Install dependencies:
  - Run `yarn install` in the project root
- Create a new branch to work on:
  - `git checkout -b <YOUR_BRANCH_NAME>`
  - A good name for a branch describes the thing you’ll be working on, e.g. `docs-fixes`, `fix-deliver-upload`, `gym-build-android-app`, etc.
- That’s it! Now you’re ready to work on _Digitize Text_

## Submitting the PR

When the coding is done and you’re finished testing your changes, you are ready to submit the PR to the repo. Some best practices when submitting a pull request are:

- Use a descriptive title
- Link the issues that are related to your PR in the body

## After the review

Once a core member has reviewed your PR, you might need to make changes before it gets merged. To make it easier on us, please make sure to avoid using `git commit --amend` or force pushes to make corrections. By avoiding rewriting the commit history, you will allow each round of edits to become its own visible commit. This helps the people who need to review your code easily understand exactly what has changed since the last time they looked. Feel free to use whatever commit messages you like, as we will squash them anyway. When you are done addressing your review, also add a small comment like “Feedback addressed @<your_reviewer>”.

<!-- Links -->
[you can do this]: https://github.com/digitize-text/digitize-text/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22complexity%3A+you+can+do+this%22+
