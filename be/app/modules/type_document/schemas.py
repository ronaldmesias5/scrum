"""
Módulo: modules/type_document/schemas.py
Descripción: Esquemas Pydantic para tipos de documento de identidad.
"""

import uuid

from pydantic import BaseModel


class TypeDocumentCreate(BaseModel):
    name: str


class TypeDocumentResponse(BaseModel):
    id: uuid.UUID
    name: str

    model_config = {"from_attributes": True}
