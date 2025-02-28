"""Knowledge graph base class."""

import logging
from abc import ABC, abstractmethod
from typing import List, Optional

from dbgpt._private.pydantic import ConfigDict
from dbgpt.rag.index.base import IndexStoreBase, IndexStoreConfig
from dbgpt.storage.graph_store.graph import Graph

logger = logging.getLogger(__name__)


class KnowledgeGraphConfig(IndexStoreConfig):
    """Knowledge graph config."""

    model_config = ConfigDict(arbitrary_types_allowed=True, extra="allow")


class KnowledgeGraphBase(IndexStoreBase, ABC):
    """Knowledge graph base class."""

    @abstractmethod
    def get_config(self) -> KnowledgeGraphConfig:
        """Get the knowledge graph config."""

    @abstractmethod
    def query_graph(self, limit: Optional[int] = None) -> Graph:
        """Get graph data."""

    @abstractmethod
    def delete_by_ids(self, ids: str) -> List[str]:
        """Delete document by ids."""
