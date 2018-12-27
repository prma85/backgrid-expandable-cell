# Bug Report

If you are submitting a bug report against a stable release, please check
whether you have the latest release and your bug has been fixed in one of the
newer versions. If it has been fixed, download the latest version and come back
if the issue persists.

You should open a new issue ticket only if the issue has not been reported
before. Please search the issue list, including all the closed bugs before you
submit a new issue ticket. If the issue has been reported before, you should
reopen the old one.

When reporting a new issue, you should use a succinct and concise subject
line. In the body, you should write down the precise steps to reproduce the
issues, and the browser vendor and version you are using.

Basic Email etiquette applies.

# Feature Request

Please search the issue list first to see if your feature has already been
requested. All features are tagged with the tag `enhancement`. If there already
is an enchancement ticket, you can vote on it by putting in a +/-1 comment. If
you cannot find the `enhancement` you are looking for, you can open a new issue.

Please prefix the subject line with **[Feature Request]** so your issue will
stand out as a feature request. In the body, please lay out your rationale for
such new feature to aid decision making.

Basic Email etiquette is appreciated.

# Branching

For every issue, there should be a branch for fixing that issue. When you are
happy with your changes, you can file a pull request from your feature branch
against Backgrid's master.

# Commit Messages

This
[Erlang/OTP commit message guideline](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)
says it all. Take one minute to read it. If you are filing a pull request with
commit messages that don't follow this guideline, don't fret, take another
minute to rewrite them.

```shell
git log # find out how many commits you need to go back
git rebase -i HEAD~<number of changes to go back>
git push origin +<branch>:<branch>
```

### Note:

Don't forget to keep your tree in sync with upstream before you submit a
pull request. Usage of git-rebase is optional but encouraged.
