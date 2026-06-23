---
title: Installation
description: Install Pydantic via pip, uv, or poetry
---

## pip

```bash
pip install pydantic
```

## uv

```bash
uv add pydantic
```

## Poetry

```bash
poetry add pydantic
```

## Verify Installation

```python
import pydantic
print(pydantic.__version__)  # 2.x
```

## Optional Dependencies

Install with email validation support:

```bash
pip install "pydantic[email]"
```
